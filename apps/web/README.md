# Mina Governance Web

## A NextJS based frontend for the Mina Governance Dashboard.

## Component Generator

This script allows you to generate a component with the following template files:

- `${COMPONENT_NAME}.tsx`: contains the base component
- `${COMPONENT_NAME}.stories.tsx`: contains the base Storybook stories
- `${COMPONENT_NAME}.spec.tsx`: contains the base unit tests

### Usage

You can run the generator with :

```bash
pnpm generate-component [COMPONENT_NAME]
```

### Notes

- The component name must be in PascalCase (e.g. MyComponent, Button).
- The script will not overwrite existing directories with the same name as the component.
- The ${COMPONENT_NAME} placeholder in the template files will be replaced with the actual component name.

### Example

```bash
pnpm generate-component MyButton
```

This will generate the following files and directory structure:

    MyButton/
    ├── MyButton.spec.tsx
    ├── MyButton.stories.tsx
    └── MyButton.tsx
