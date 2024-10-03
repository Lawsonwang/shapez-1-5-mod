import base64
import json
import os

import create_blueprint_previews


def main():
    create_blueprint_previews.main()

    os.chdir("resources")

    resources = {}
    for key in os.listdir():
        resources[key] = {}
        for name in os.listdir(key):
            if not name.endswith(".png"):
                continue
            with open(os.path.join(key, name), "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
            resources[key][name] = f"data:image/png;base64,{b64}"

    resources = f"const RESOURCES = {json.dumps(resources, indent=4)};"

    os.chdir("..")

    with open("main.js", "r", encoding="utf-8") as f:
        main_code = f.read()

    main_code += resources

    with open(os.path.join("build", "shapez_1_5_mod.js"), "w", encoding="utf-8") as f:
        f.write(main_code)


if __name__ == "__main__":
    main()
