import React from 'react';

// classic way:
// const App = () => {
//     return (
//         <div>
//             <h1>Helo World</h1>
//         </div>
//     )
// };

// or better way:
const App = () => (
    <div className="wrapper">
        <h1 className="mainHeader">Helo World</h1>
    </div>
);

// ES Modules - default export
export default App;

// ES Modules - named export
//export { App };
// import { App } from 'path/App';