import { useEffect } from "react/cjs/react.development";
import { reactLocalStorage } from "reactjs-localstorage";

export async function logedUder() {

    let data= await reactLocalStorage.getObject('jwt');
    let decoded = await jwt_decode(JSON.stringify(data))

    return {
      decoded,
    }
}