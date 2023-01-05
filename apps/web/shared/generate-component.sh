#!/bin/bash

echo "Enter component type:"
options=("Atoms" "Molecules" "Organisms")
select componentType in "${options[@]}"; do
    case $componentType in
    "Atoms")
        break
        ;;
    "Molecules")
        break
        ;;
    "Organisms")
        break
        ;;
    *)
        echo >&2 "Invalid option"
        ;;
    esac
done

componentName=$1
if [ -z "$componentName" ]; then
    echo >&2 "Please specify a component name"
    exit 1
fi

# Check if component name is in PascalCase
if [[ ! "$componentName" =~ ^[A-Z][a-zA-Z0-9]*$ ]]; then
    echo >&2 "Component name must be in PascalCase"
    exit 1
fi

componentPath=$(pwd)/$componentName
if [ -d "$componentPath" ]; then
    echo >&2 "$componentPath already exists"
    exit 1
fi
mkdir "$componentPath"

componentTemplate="export interface ${componentName}Props {
  empty?: boolean;
}

export const ${componentName} = ({ empty: _empty }: ${componentName}Props) => {
  return <div>${componentName}!</div>;
};"
echo "$componentTemplate" >"$componentPath/${componentName}.tsx"

storiesTemplate="import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName}, ${componentName}Props } from './${componentName}';

export default {
  title: '${componentType}/${componentName}',
  component: ${componentName},
} as Meta<typeof ${componentName}>;

export const Story: StoryObj<${componentName}Props> = { args: { empty: true } };"
echo "$storiesTemplate" >"$componentPath/${componentName}.stories.tsx"

specTemplate="import { render, screen } from '@testing-library/react';

import { ${componentName} } from './${componentName}';

describe('${componentType}', () => {
  it('renders the ${componentName}', () => {
    render(<${componentName} />);
    expect(screen.getByText('${componentName}!')).toBeInTheDocument();
  });
});"
echo "$specTemplate" >"$componentPath/${componentName}.spec.tsx"
