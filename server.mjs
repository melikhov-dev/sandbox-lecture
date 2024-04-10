import express from 'express';
import { template } from './template.mjs';
import {evalRunner} from './runners/eval.mjs';
import { vmRunner } from './runners/vm.mjs';
import { vm2Runner } from './runners/vm2.mjs';
import { isolatedVmRunner } from './runners/isolatedVm.mjs';
import { quickjsRunner } from './runners/quickjs-emscripten.mjs';

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get('/', (req, res) => {
    res.send(template({result: '', code: '', sandboxType: 'eval'}));
})

app.post('/', async (req, res) => {
  const result = await sandbox(req.body.code, req.body.sadbox);
  res.send(template({result, code: req.body.code, sandboxType: req.body.sadbox}));
})

app.listen(3000);

async function sandbox(code, runner){
  switch (runner) {
    case 'eval' : {
      return evalRunner(code);
    }
    case 'vm': {
      return vmRunner(code);
    }
    case 'vm2': {
      return vm2Runner(code);
    }
    case 'isolated-vm': {
      return isolatedVmRunner(code);
    }
    case 'quickjs-emscripten': {
      return await quickjsRunner(code);
    }
  }
}