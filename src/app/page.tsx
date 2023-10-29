import { sql } from "@vercel/postgres";

export default async function Home() {

  // normal
  // const id = '1'
  // const { rows } = await sql`SELECT * FROM users where user_id = ${id}`;

  // with sql injection
  const id = '1 OR 1=1'
  const { rows } = await sql`SELECT * FROM users where user_id = ${id}`;


  return (
    <main>
      <ul>
        {rows.map(row => (
          <li key={row.user_id}>
            {row.first_name}
          </li>
        ))}
      </ul>
    </main>

  )
}
