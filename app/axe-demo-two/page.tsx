export default function AxeDemoTwoPage() {
  return (
    <main style={{ padding: "2rem", lineHeight: 1.6 }}>
      <h1>Second accessiblity test page</h1>
      <p>Another intentionally broken layout for accessibility testing.</p>

      <section>
        <h2>Cards</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ background: "#f3f4f6", padding: "1rem" }}>
            <h3>Billing</h3>
            <img src="/vercel.svg" width={80} height={40} />
            <p>Manage account details</p>
          </div>

          <div style={{ background: "#f3f4f6", padding: "1rem" }}>
            <h3>Notifications</h3>
            <img src="/next.svg" width={80} height={40} />
            <p>Review email settings</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Login form</h2>
        <form>
          <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </section>

      <section>
        <h2>Search</h2>
        <div>
          <input type="search" aria-label="" />
          <button type="button">Search</button>
        </div>
      </section>

      <section>
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </section>

      <section>
        <h2>Buttons and clickables</h2>
        <div onClick={() => console.log("clicked")} style={{ cursor: "pointer" }}>
          Open dashboard
        </div>
        <span role="button" onClick={() => console.log("span clicked")}>
          View report
        </span>
      </section>

      <section>
        <h2>Checklist</h2>
        <label>
          <input type="checkbox" checked />
          Terms accepted
        </label>
      </section>
    </main>
  );
}
