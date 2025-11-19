# Ecommerce on 3x Raspberry Pi 3B - Build Plan

## Architecture

### Pi #1 - Database (NVMe)

- PostgreSQL 14 (256MB shared_buffers, max 20 connections)
- PgBouncer connection pooler

### Pi #2 - CMS

- FastSchema (product/order content management)
- Redis (cart sessions, 30min TTL)

### Pi #3 - Application

- SvelteKit (handles all business logic + frontend)
- Cloudflare

## Tech Stack

- **Frontend/Backend:** SvelteKit (unified app, no separate API)
- **CMS:** FastSchema
- **Database:** PostgreSQL on NVMe
- **Cache:** Redis
- **Payments:** Stripe Checkout
- **Email:** Resend
- **Images:** ImageKit CDN

## FastSchema Models

**Product:**

- sku, name, description, price, images (ImageKit URLs), inventory_qty, variants (JSON), metadata (JSON)

**Order:**

- order_number, customer_email, items (JSON), total, status, payment_intent, shipping_address (JSON), created_at

## SvelteKit Structure

```txt
/routes
  /products/[slug]           # SSG product pages
  /cart                      # Client-side cart UI
  /checkout                  # Server-side checkout logic
  /api/checkout/+server.js   # Stripe integration
  /api/webhooks/+server.js   # Stripe webhooks
  /orders/[id]               # Order confirmation
```

## Key Flows

**Checkout:**

1. SvelteKit server action creates Stripe Payment Intent
2. Client displays Stripe Checkout
3. Webhook handler creates order in FastSchema
4. Decrement inventory (PostgreSQL row lock)
5. Send confirmation via Resend

**Cart:**

- Stored in Redis with session ID
- 30min TTL auto-cleanup
- No inventory reservation (check at checkout)

## Memory Budget

- Pi #1: PostgreSQL ~400MB, system ~150MB = **550MB used**
- Pi #2: FastSchema ~120MB, Redis ~80MB, system ~150MB = **350MB used**
- Pi #3: SvelteKit ~200MB, system ~150MB = **350MB used**

## PostgreSQL Config

```conf
shared_buffers = 256MB
effective_cache_size = 768MB
work_mem = 4MB
max_connections = 20
random_page_cost = 1.1  # NVMe optimization
```

## Build Order

1. FastSchema schemas + PostgreSQL setup
2. SvelteKit product catalog (SSG from FastSchema)
3. Cart system (Redis + SvelteKit stores)
4. Stripe integration (payment intent + webhooks)
5. Order flow (inventory decrement + email)
6. Admin via FastSchema dashboard

## Constraints

- **Capacity:** 50-100 concurrent users, 500-1000 orders/month
- **Limitations:** Saturates at ~200 connections or 5000+ products
