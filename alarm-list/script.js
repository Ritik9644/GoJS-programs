fetch("/alarm_list.json")
    .then(r => r.json())
    .then(config =>{

        const columns = config.nodeDataArray[0].properties.Columns;

        const columnDefs = columns.map(c =>{

            const column ={
                field: c.columnName,
                headerName: c.displayName
            };

            if (c.eltType === "DATETIME"){
                column.filter = "agDateColumnFilter";
            }
            else {
                column.filter = "agTextColumnFilter";

                if (c.filter?.enabled) {
                    column.filterParams = {
                        numAlwaysVisibleConditions: 2,
                        maxNumConditions: Math.max(
                            2,
                            c.filter.conditions.length
                        ),
                        defaultJoinOperator: c.filter.conditionLogic
                    };
                }
            }
            return column;
        });



        fetch("/api/alarms")
            .then(r => r.json())
            .then(rows => {

                agGrid.createGrid(
                    document.getElementById("grid"),
                    {
                        columnDefs: columnDefs,
                        rowData: rows
                    }
                );

            });
    });