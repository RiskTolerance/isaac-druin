<script lang="ts">
	import { Container, Card, Grid } from '$layouts';
	import { RichText } from '$components';
</script>

<Container>
	<h1>Examples of library usage</h1>
</Container>

<Container class="space-y-4">
	<h2>Wrapper Components</h2>
	<p>Wrapper components are used to wrap content in a container and apply a consistent layout.</p>
	<Grid columns={12}>
		<Card class="col-span-12">
			<p>0</p>
		</Card>
		{#each [1, 2, 3] as item}
			<Card class="col-span-4">
				<p>{item}</p>
			</Card>
		{/each}
		{#each [...Array(12).keys()] as item}
			<Card class="col-span-2">
				<p class="text-xs">{item}</p>
			</Card>
		{/each}
	</Grid>
</Container>

<Container>
	<RichText class="mx-auto">
		<span class="text-lg font-bold">This is a rich text component.</span>
		<span>
			<p>Headings:</p>
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
		</span>

		<span>
			<p>Paragraph:</p>
			<p>
				This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
				excepturi veniam tempora eveniet similique, accusamus error vel consectetur ducimus
				assumenda, distinctio, odit natus dolor incidunt sequi voluptates delectus amet ex sunt.
				Mollitia itaque ducimus distinctio ipsum officiis optio fugiat, porro iure molestias
				deleniti voluptatum esse corrupti? Quae, harum fuga.
			</p>
		</span>
		<span>
			<p>Lists:</p>
			<ul>
				<li>This is a list item.</li>
				<li>This is a list item.</li>
				<ul>
					<li>This is a nested list item.</li>
					<li>This is a nested list item.</li>
				</ul>
			</ul>
			<ol>
				<li>This is a list item.</li>
				<li>This is a list item.</li>
				<ol>
					<li>This is a nested list item.</li>
					<li>This is a nested list item.</li>
				</ol>
			</ol>
		</span>
		<span>
			<p>Quotes:</p>
			<blockquote>
				<p>
					This is a quote. Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore
					excepturi veniam tempora eveniet similique, accusamus error vel consectetur ducimus
					assumenda, distinctio, odit natus dolor incidunt sequi voluptates delectus amet ex sunt.
					Mollitia itaque ducimus distinctio ipsum officiis optio fugiat, porro iure molestias
					deleniti voluptatum esse corrupti? Quae, harum fuga.
				</p>
			</blockquote>
		</span>
		<span>
			<p>Code:</p>
			<code data-language="javascript"> console.log('Hello, world!'); </code>
			<code data-language="typescript"> console.log('Hello, world!'); </code>
			<code data-language="html"> &lt;h1&gt;Hello, world!&lt;/h1&gt; </code>
			<code data-language="css"> body &#123; background-color: red; &#125; </code>
		</span>
		<span>
			<p>Tables:</p>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>John</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Jane</td>
						<td>21</td>
					</tr>
					<tr>
						<td>Jim</td>
						<td>22</td>
					</tr>
				</tbody>
			</table>
		</span>
	</RichText>
</Container>
