import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('package', {
    description: 'Generate a new internal package in the DIGIREACH ONE monorepo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package? (e.g. logger, utils)',
        validate: (input: string) => {
          if (!input) return 'Package name is required';
          if (input.includes(' ')) return 'Package name cannot include spaces';
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/tsconfig.json',
        templateFile: 'templates/tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
    ],
  });
}
