<template>
    <!-- html -->
    <div class="main">
        <table v-for="(group, i) in originData" :key="i" class="table">
            <tr class="title">
                <td :colspan="totalCol">{{group.title}}</td>
            </tr>
            <tr>
                <td  v-for="(row, j) in group.tableList" :key="j" class="label" :collapse="row.col" :style="{width: `${colWidth * row.col}px`}">{{row.label}}</td>
            </tr>
            <tr v-for="(item, i) in data.list">
                <td  v-for="(row, j) in group.tableList" :key="j" class="label" :collapse="row.col" :style="{width: `${colWidth * row.col}px`}">{{item[row.key]}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            	totalCol: 14,   //每行列数
            	labelCol: 2,   //label所占列数
            	colWidth: 40,  //每单位宽度
                data: {
                    list: [{
                        field1: '数据field11',
                        field2: '数据field12',
                        field3: '数据field13',
                        field4: '数据field14',
                        field5: '数据field15'
                    }, {
                        field1: '数据field21',
                        field2: '数据field22',
                        field3: '数据field23',
                        field4: '数据field24',
                        field5: '数据field25'
                    }]
                },
            	originData: [{
            		title: '分组2',
                    multi: true,
            		fields: [{
            			key: 'field1',
            			label: '字段1',
            			max: 3,
            			col: 2,  //最小列数
                        row: 1
            		}, {
            			key: 'field2',
            			label: '字段2',
            			col: 2,
                        row: 1
            		}, {
            			key: 'field3',
            			label: '字段3',
            			col: 3,
                        row: 1
            		}, {
            			key: 'field4',
            			label: '字段4',
            			col: 2,
            			max: 8,
            			row: 1
            		}, {
            			key: 'field5',
            			label: '字段5',
            			col: 4,
            			row: 1
            		}, {
            			key: 'field6',
            			label: '字段6',
            			col: 3,
            			row: 1
            		}, {
            			key: 'field7',
            			label: '字段7',
            			col: 2,
            			row: 1
            		}, {
            			key: 'field8',
            			label: '字段8',
            			col: 2,
            			row: 1
            		}, {
            			key: 'field9',
            			label: '字段9',
            			col: 3,
            			row: 1
            		}]
            	}]
            }
        },
        methods: {
        	init() {
                let colField = {
                    total: 0,
                    list: []
                }
        		this.originData.map(group => {
                    group.tableList = []
                    group.fields.map((field, i) => {
                        let newColTotal = colField.total + field.col
                        if(newColTotal <= this.totalCol) {
                            colField.list.push(field)
                            colField.total = newColTotal
                        } else {
                            this.fillRow(colField)
                        }
                    })
                    group.tableList = colField.list
                })
        	},
        	//扩展行
            fillRow(colField) {
                let enableCol = this.totalCol - colField.total
                if(colField.total < this.totalCol) {
                    colField.list.map((item, i) => {
                        item.max = item.max || 0
                        //可扩展或为本行最后一个字段
                        if(i === colField.list.length - 1) {
                            item.max = item.col + enableCol
                        }
                        if(item.max > 0) {
                            if(enableCol >= item.max - item.col) {
                                colField.total = colField.total - item.col + item.max
                                enableCol = enableCol - item.max + item.col
                                item.col = item.max
                            } else {
                                colField.total = colField.total + enableCol
                                item.col = item.col + enableCol
                                enableCol = 0
                            }
                        }
                    })
                }
            }
        },
        created() {
        	this.init()
        }
    }
</script>
<style lang="scss">
.main {
	width: 560px;
	margin: 0 auto;
}

.table {
	width: 560px;
	border: 2px solid #eaeaea;
    border-collapse: collapse;

    tr,
    td {
    	height: 32px;
    	font-size: 12px;
    	line-height: 32px;
		border: 2px solid #eaeaea;
    }

    .label {
    	text-align: center;
    }
}
</style>
	
	