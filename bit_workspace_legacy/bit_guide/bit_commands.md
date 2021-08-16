// workspace commands
bit init --package-manager yarn

bit import bit.envs/compilers/react@1.0.30 --compiler

// component commands.

bit add ./src/components/{component_folder}/{component_folder}

bit tag {component} 0.0.1 | 0.0.2 | 1 | --minor | --major

bit export codedevbrad.reactframeit__components

-- Global remove
bit remove codedevbrad.reactframeit__components/{component} --remote

-- Local remove
bit remove {component}

-- npm bit_run commands

   commandtype options:
     * add
     * tag [ minor , major ]
     * push
     * remove [ local , remote ]

   npm run bit_run -- command module tag_type