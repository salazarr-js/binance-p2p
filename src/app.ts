import { Hono } from 'hono/mod.ts'
const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

Deno.serve(app.fetch)
