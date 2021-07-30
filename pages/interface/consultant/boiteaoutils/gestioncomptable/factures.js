import React ,{useState} from 'react'

export default function factures() {

    // Excel.run(function (context) {
    //     var sheet = context.workbook.worksheets.getItem("Sample");
    //     var expensesTable = sheet.tables.add("A1:D1", true /*hasHeaders*/);
    //     expensesTable.name = "ExpensesTable";
    
    //     expensesTable.getHeaderRowRange().values = [["Date", "Merchant", "Category", "Amount"]];
    
    //     expensesTable.rows.add(null /*add rows to the end of the table*/, [
    //         ["1/1/2017", "The Phone Company", "Communications", "$120"],
    //         ["1/2/2017", "Northwind Electric Cars", "Transportation", "$142"],
    //         ["1/5/2017", "Best For You Organics Company", "Groceries", "$27"],
    //         ["1/10/2017", "Coho Vineyard", "Restaurant", "$33"],
    //         ["1/11/2017", "Bellows College", "Education", "$350"],
    //         ["1/15/2017", "Trey Research", "Other", "$135"],
    //         ["1/15/2017", "Best For You Organics Company", "Groceries", "$97"]
    //     ]);
    
    //     if (Office.context.requirements.isSetSupported("ExcelApi", "1.2")) {
    //         sheet.getUsedRange().format.autofitColumns();
    //         sheet.getUsedRange().format.autofitRows();
    //     }
    
    //     sheet.activate();
    
    //     return context.sync();
    // }).catch(errorHandlerFunction);
    
    const compta =[{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"}]


    return (
        <div>   
            
            <table>
                <thead>
                    <tr>
                        <th>libelle</th>
                        <th>N</th>
                        <th>N-1</th>
                        <th>Progression</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        compta.map((data,index)=>{
                    
                            return (
                                <tr >
                                    <td key={index}>{data.name}</td>
                                    <td key={index}>{data.n}</td>
                                    <td key={index}>{data.n_minus}</td>
                                    <td key={index}>{data.diff}</td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    )
}
