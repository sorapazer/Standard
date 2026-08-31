/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { existsSync, readdirSync } from "node:fs";

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideBundlerConfig(enableTailwind);

// Sandboxes without egress to remotion.media can't download Chrome Headless
// Shell. Use a pre-installed one when it's there; locally this directory
// doesn't exist and Remotion downloads its own as usual.
const preinstalledDir = "/opt/pw-browsers";

const candidates = [
  process.env.REMOTION_BROWSER_EXECUTABLE,
  ...(existsSync(preinstalledDir)
    ? readdirSync(preinstalledDir)
        .filter((name) => name.startsWith("chromium_headless_shell-"))
        .map((name) => `${preinstalledDir}/${name}/chrome-linux/headless_shell`)
    : []),
];

const browserExecutable = candidates.find((path) => path && existsSync(path));

if (browserExecutable) {
  Config.setBrowserExecutable(browserExecutable);
}
