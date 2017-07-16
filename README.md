# Demo for (potentional) recompile bug in babel-plugin-preval

## Steps

1. `npm install`
2. `npm start`
3. you should see the contents of `file.md` as expected
4. modify `file.md`
5. `npm start`
6. you should see the previous contents of `file.md`, without the modifications
