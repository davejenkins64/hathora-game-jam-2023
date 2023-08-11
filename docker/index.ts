import { fido } from "../util/fido";
import { spawnReadline } from "../util/spawnReadline";

const BASE_URL = "http://localhost:8000";
const CONTAINER_PORT = new URL(BASE_URL).port;
const CONTAINER_NAME = "container-name";
const HOST_PORT = 8000;

let isRunning = false;

await spawnReadline("docker", [
	"container",
	"ls",
	"--filter name=\"" + CONTAINER_NAME + "\""
], function(line) {
	if (line.includes("Up")) {
		isRunning = true;

		return null;
	}
});

if (!isRunning) {
	// Build

	await spawnReadline("docker", [
		"image",
		"build",
		"docker",
		"--tag \"image-name\""
	]);

	// Run

	spawnReadline("docker", [
		"container",
		"run",
		"--name " + CONTAINER_NAME,
		"--rm",
		"-it", // Required
		"--publish " + HOST_PORT + ":" + CONTAINER_PORT,
		CONTAINER_NAME + ":latest"
	]);
}

await fido.poll(BASE_URL, {}, {
	"maxRetries": Infinity
});

console.log("Ready!");

// Because we aren't detaching and we want the containers to keep running, we have to exit explicitly.
process.exit(0);
