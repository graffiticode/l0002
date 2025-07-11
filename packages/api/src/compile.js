import { compiler } from './compiler.js';
export async function compile({ auth, authToken, code, data, config }) {
  // console.log("compile() code=" + JSON.stringify(code, null, 2));
  // console.log("compile() data=" + JSON.stringify(data, null, 2));
  if (!code || !data) {
    throw new Error('Missing required parameters: code and data');
  }
  return await new Promise((resolve, reject) =>
    compiler.compile(code, data, config, (err, data) => {
      // console.log(
      //   "compile()",
      //   "data=" + JSON.stringify(data, null, 2),
      // );
      if (err && err.length) {
        resolve({errors: err});
      } else {
        resolve(data);
      }
    })
  );
}
