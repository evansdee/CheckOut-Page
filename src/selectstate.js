import allState from "./allstate"


export default function SelectState({inputForm,onFormChange}){

    const selectedState = inputForm.country === "Nigeria"? allState[0] : allState[1]
    return(
        <select name="state" value={inputForm.state} onChange={onFormChange}>
            {
                selectedState.map(ele =>{
                    return <option key={ele.code} value={ele.code}>
                        {ele.name}
                    </option>
                })
            }
        </select>
    )
}