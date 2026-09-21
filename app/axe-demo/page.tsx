export default function AxeDemoPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Accessibility demo page</h1>
      <p>This page intentionally contains many common accessibility issues.</p>

      <section>
        <h2>Image issues</h2>
        <img src="/next.svg" width={120} height={40} />
        <img src="/vercel.svg" alt="" width={120} height={40} />
      </section>

      <section>
        <h2>Form issues</h2>
        <label>Username</label>
        <input type="text" name="username" placeholder="Type here" />

        <label>Email</label>
        <input type="email" name="email" />

        <form>
          <input type="text" name="search" />
          <button>Search</button>
        </form>
      </section>

      <section>
        <h2>Interactive elements</h2>
        <div onClick={() => alert("clicked")}>Open settings</div>
        <div role="button" onClick={() => alert("button clicked")}>
          Submit
        </div>
        <a href="#">Read more</a>
        <a href="#" style={{ display: "block", marginTop: "1rem" }}>
          Another link
        </a>
      </section>

      <section>
        <h2>Table issues</h2>
        <table>
          <tr>
            <td>Product</td>
            <td>Price</td>
          </tr>
          <tr>
            <td>Widget</td>
            <td>$10</td>
          </tr>
        </table>
      </section>

      <section>
        <h2>Navigation</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
        </nav>
      </section>

      <section>
        <h2>Other issues</h2>
        <input type="checkbox" checked />
        <button onClick={() => alert("hello")}>Click me</button>
      </section>
    </main>
  );
}
