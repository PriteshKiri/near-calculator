# **Calculator Example in Assemblyscript**

**Description**

This contract includes a simple Calculator. Contract in assembly/index.ts provides operations to add, subtract, multiply and divide the input value. Test files are available in assembly__test__.

**To Run**

git clone https://github.com/PriteshKiri/near-calculator

**Setup**

Install dependencies:

yarn

Make sure you have near-cli by running:

near --version

If you need to install near-cli:

npm install near-cli -g

**To Build**

Run the command : yarn build

**To Test**

Run the command : yarn test

**To Deploy**

Run the command : near deploy --accountId=youraccount.testnet --wasmFile=build/release/${your file name}.wasm
