import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";


// export default {
//   install: (app: App) => {
//     for (const c in components) {
//       app.use(components[c]);
//     }
//   }
// };

type Components = typeof components;

export default {
    install: (app: App) => {
        const componentNames: (keyof Components)[] = Object.keys(components) as (keyof Components)[];

        for (const c of componentNames) {
            app.use(components[c]);
        }
    },
};