# Minimal example for problem with `@laynezh/vite-plugin-lib-assets` and `vite build --watch``

When running `vite build` with the [`--watch` flag](https://vitejs.dev/guide/build.html#rebuild-on-files-changes), the `assets` folder and its contents are not re-created after a rebuild triggered by the watcher.

See https://github.com/laynezh/vite-plugin-lib-assets/issues/62

**Steps to reproduce:**

- Check out [this example project](https://github.com/tstehr/repro-plugin-lib-assets-build-watch) and run `yarn install`
- Run `yarn run vite build --watch` in the project directory
- Observe that a folder `./dist/assets` is created containing the svg linked in `App.tsx`
- Change a file in the project in some way that triggers a rebuild

**Expected:** The `./dist/assets` folder continues to exist and contains the svg

**Actual:** The `./dist/assets` is deleted and the build output is now missing the svg file.

A possible workaround is to set the [`build.emptyOutDir` option](https://vitejs.dev/config/build-options.html#build-emptyoutdir) to `false` so the assets created in the initial build aren't cleared by the rebuild. However, this introduces the risk of stale build outputs being present after the build.