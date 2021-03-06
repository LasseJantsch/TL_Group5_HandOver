import React from "react"

import ShowTable from "./ShowTable"
import ShowModal from "./ShowModal"

import { TableContextProvider } from "../Context/TableContext"
import { ModalContextProvider } from "../Context/ModalContext"

import { useCMSContext } from "../Context/CMSContext"

function CMS() {

    const {modal} = useCMSContext()

    return(
        <div>
            <TableContextProvider>
                <ShowTable />
                {modal === true ? 
                    <ModalContextProvider>
                        <ShowModal /> 
                    </ModalContextProvider>
                : null}
            </TableContextProvider>
        </div>    
    )
}

export default CMS