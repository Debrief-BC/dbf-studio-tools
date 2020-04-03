# Debrief Studio tools

**Debrief tools** are used to interact with Debrief blockchain and to debug transactions.


## Installation Prerequisites
Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 8.x.x or higher is required.

## Install Debrief studio tools from github source:

Use the following steps to install the wallet from github source:

Clone the git repository:
```
```
Go into the  repository:

Use the package manager [npm](https://www.npmjs.com/) to install dependencies:
```bash
npm install
```

Bootstrap the packages in the repository:
```bash
npm run bootstrap
```

### Run the debugger

See [here](dbf-debugger/README.md) how to install, run and use the debugger locally.

The debugger itself contains several controls that allow stepping over the trace and seeing the current state of a selected step.

## <a name="modules"></a>Debrief tools Modules

Debrief tools is built out of several different modules:

+ [`dbf-analyzer`](dbf-analyzer/README.md)
+ [`dbf-solidity`](dbf-solidity/README.md) provides Solidity analysis and decoding functions.
+ [`dbf-lib`](dbf-lib/README.md)
+ [`dbf-debug`](dbf-debug/README.md) allo debuggin transaction.
+ [`dbf-tests`](dbf-tests/README.md) provides unit testing for solidity.
+ [`dbf-astwalker`](dbf-tests/README.md) provides a tool for parsing solidity AST.
+ [`dbf-url-resolver`](dbf-url-resolver/README.md) provides helpers for resolving external content (github, swarm, ipfs, ...).


Each generally has their own npm package and test suite, as well as basic documentation.

## Contributing

Everyone is very welcome to contribute. Please reach us for contribution.

