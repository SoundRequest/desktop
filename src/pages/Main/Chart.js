import React, { Component } from 'react'
import Container from 'src/components/Layout/Container'
import DataTable, { createTheme } from 'react-data-table-component'
import Axios from 'axios'
import config from 'src/config'

createTheme('songlist', {
  background: {
    default: 'rgba(0, 0, 0, 0)'
  },
  divider: {
    default: 'rgba(0,0,0,.0)'
  },
  highlightOnHover: {
    default: '#fefefe',
    text: 'rgba(0, 0, 0, 0.87)'
  }
})

const customStyles = {
  rows: {
    style: {
      // minHeight: '72px' // override the row height
      backgroundColor: '#ffffff',
      marginTop: 5,
      marginBottom: 5,
      boxShadow:
        'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      borderRadius: '0.375rem'
    }
  }
}

class Chart extends Component {
  state = {
    melonChart: []
  }

  componentDidMount() {
    this.getChart()
  }
  getChart = async () => {
    const res = await Axios.get(`${config.baseurl}/chart/melon`)
    this.setState({ melonChart: res.data.list })
  }
  columns = [
    {
      name: '순위',
      selector: 'Count',
      cell: (row) => <p>{(row.Count + 1).toString()}</p>,
      sortable: true,
      width: '60px'
    },
    {
      name: '이름',
      selector: 'Title',
      sortable: true
    },
    {
      name: '설명',
      selector: 'Artist'
    }
  ]

  render() {
    return (
      <Container title='Chart'>
        <DataTable
          title='멜론차트 50위'
          className='listContainer'
          columns={this.columns}
          customStyles={customStyles}
          data={this.state.melonChart}
          theme='songlist'
          highlightOnHover
        />
      </Container>
    )
  }
}

export default Chart
