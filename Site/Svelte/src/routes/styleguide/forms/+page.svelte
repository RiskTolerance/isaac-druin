<div class="prose-layout">
	<h1>Forms</h1>
	<p class="lead">Form elements and input styling.</p>

	<section class="space-y-8 mt-8">
		<div>
			<h2>Text Inputs</h2>
			<form class="space-y-4 mt-4 max-w-md">
				<label>
					<span>Name</span>
					<input type="text" placeholder="Enter your name" />
				</label>
				<label>
					<span>Email</span>
					<input type="email" placeholder="your@email.com" />
				</label>
				<label>
					<span>Password</span>
					<input type="password" placeholder="••••••••" />
				</label>
			</form>
		</div>

		<div>
			<h2>Textarea</h2>
			<form class="mt-4 max-w-md">
				<label>
					<span>Message</span>
					<textarea rows="4" placeholder="Enter your message"></textarea>
				</label>
			</form>
		</div>

		<div>
			<h2>Checkboxes</h2>
			<form class="space-y-2 mt-4">
				<label class="flex items-center gap-2">
					<input type="checkbox" />
					<span>Option 1</span>
				</label>
				<label class="flex items-center gap-2">
					<input type="checkbox" checked />
					<span>Option 2 (checked)</span>
				</label>
				<label class="flex items-center gap-2">
					<input type="checkbox" disabled />
					<span>Option 3 (disabled)</span>
				</label>
			</form>
		</div>

		<div>
			<h2>Radio Buttons</h2>
			<form class="space-y-2 mt-4">
				<label class="flex items-center gap-2">
					<input type="radio" name="radio-example" />
					<span>Radio Option 1</span>
				</label>
				<label class="flex items-center gap-2">
					<input type="radio" name="radio-example" checked />
					<span>Radio Option 2 (selected)</span>
				</label>
				<label class="flex items-center gap-2">
					<input type="radio" name="radio-example" />
					<span>Radio Option 3</span>
				</label>
			</form>
		</div>

		<div>
			<h2>Select</h2>
			<form class="mt-4 max-w-md">
				<label>
					<span>Choose an option</span>
					<select>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
					</select>
				</label>
			</form>
		</div>

		<div>
			<h2>Button States</h2>
			<div class="flex flex-wrap gap-4 mt-4">
				<button type="button" class="rounded-md bg-white px-4 py-2">Default</button>
				<button type="button" class="rounded-md bg-white px-4 py-2 opacity-50 cursor-not-allowed">
					Disabled
				</button>
				<button type="button" class="rounded-md bg-brandGreen-500 px-4 py-2 text-white">
					Primary
				</button>
				<button type="button" class="rounded-md border border-brandGray-300 dark:border-brandGreen-700 px-4 py-2">
					Outline
				</button>
			</div>
		</div>
	</section>
</div>

