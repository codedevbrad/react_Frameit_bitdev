### Initialize a new bit repo

### import a compiling library.

bit import bit.envs/compilers/react --compiler

### track a new component .

bit add src/components/product-list

### building and exporting a tracked component.

bit build
bit tag product-list 0.0.1
bit export codedevbrad.reactframeit


### importing the library to make more changes.

bit init
bit import codedevbrad.reactframeit/*