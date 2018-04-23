import React from 'react';

import ItemIncome from './ItemIncome';
import ItemExpense from './ItemExpense';

const ContainerClearfix = (props) => {

    const handleClickDelete = (id, type) => {
        props.handleClickDelete(id, type);
    }
    
    const handleClickDeleteExp = (id, type) => {
        props.handleClickDeleteExp(id, type);
    }

    return(
        <div className="container clearfix">
        
                <div className="income">
                    <h2 className="icome__title">Income</h2>
                    
                    <div className="income__list">
                    
                    {
                        props.listIncome.map((item)=>{
                            return <ItemIncome key={item.idInc}

                                               idInc = {item.idInc}
                                               description={item.description}
                                               value={item.value}
                                               
                                               handleClick={handleClickDelete}/>
                        })
                    }
                    </div>
                </div>
                
                
                
                <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                    
                    <div className="expenses__list">
                       {
                           props.listExpense.map((item)=>{
                            return <ItemExpense key={item.idExp}

                                                idExp={item.idExp}
                                                description={item.description}
                                                value={item.value}
                                                
                                                handleClick={handleClickDeleteExp}/>
                           })
                       }
                               
                    </div>
                </div>
            </div>
    )
}

export default ContainerClearfix;