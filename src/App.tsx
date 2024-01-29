import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <h1>
        Minimal example for problem with <code>@laynezh/vite-plugin-lib-assets</code> and <code>vite build --watch</code>
      </h1>

      <p>See <a href="https://github.com/laynezh/vite-plugin-lib-assets/issues/62">https://github.com/laynezh/vite-plugin-lib-assets/issues/62</a></p>

      <p>The following image is included to demonstrate the problem: </p>

      <p><img src={reactLogo} className="logo react" alt="React logo" /></p>

      <p><strong>Steps to reproduce:</strong></p>

      <ul>
      <li>Check out <a href="url">this example project</a> and run <code>yarn install</code></li>
      <li>Run <code>yarn run vite build --watch</code> in the project directory</li>
      <li>Observe that a folder <code>./dist/assets</code> is created containing the svg linked in <code>App.tsx</code></li>
      <li>Change a file in the project in some way that triggers a rebuild</li>
      </ul>

      <p><strong>Expected:</strong> The <code>./dist/assets</code> folder continues to exist and contains the svg</p>

      <p><strong>Actual:</strong> The <code>./dist/assets</code> is deleted and the build output is now missing the svg file.</p>

      <p>
        A possible workaround is to set the <a href="https://vitejs.dev/config/build-options.html#build-emptyoutdir"><code>build.emptyOutDir</code> option</a> to <code>false</code> so the assets created in the initial build aren't cleared by the rebuild. However, this introduces the risk of stale build outputs being present after the build.
      </p>
    </>
  )
}

export default App
