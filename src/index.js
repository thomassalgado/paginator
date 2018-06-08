import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactQueryParams from 'react-query-params';

class Page extends ReactQueryParams {
  render() {
    return (
      <div className="pagination">
          <Paginator current_page={this.queryParams.current_page} total_pages={this.queryParams.total_pages} boundaries={this.queryParams.boundaries} around={this.queryParams.around}/>
      </div>
    );
  }
}

class Paginator extends React.Component {
  render() {

    if (isNaN(this.props.current_page) ||
        isNaN(this.props.total_pages) ||
        isNaN(this.props.boundaries) ||
        isNaN(this.props.around)) {
      return (
        <div className="pages">
          Invalid Arguments
        </div>
      );
    }

    var current_page = parseInt(this.props.current_page);
    var total_pages = parseInt(this.props.total_pages);
    var boundaries = parseInt(this.props.boundaries);
    var around = parseInt(this.props.around);

    if (current_page <= 0 || total_pages <= 0 || boundaries <= 0 || around <= 0) {
      return (
        <div className="pages">
          Parameters must be greater than 0
        </div>
      );
    }

    var skip = false

    var listPages = [];

    if( current_page > 1){
      listPages.push(<a href={"?current_page=" + (current_page - 1) + "&total_pages=" + total_pages + "&boundaries=" + boundaries + "&around=" + around}>Back</a>);
    }

    for (var i = 1; i <= total_pages; i++) {
      if (i == current_page) {
        skip = false;
        listPages.push(<a className="active" href={"?current_page=" + i + "&total_pages=" + total_pages + "&boundaries=" + boundaries + "&around=" + around}><b>{i}</b></a>);
      } else  if ((i >= (current_page - around) && i < current_page) || (i <= (current_page + around) && i > current_page) || ((i > (total_pages - boundaries)) || i <= boundaries)){
        skip = false;
        listPages.push(<a href={"?current_page=" + i + "&total_pages=" + total_pages + "&boundaries=" + boundaries + "&around=" + around }>{i} </a>);
      } else {
        if(!skip) {
            skip = true;
            listPages.push(<a>...</a>);
        }
      }
    }

    if( current_page < total_pages){
      listPages.push(<a href={"?current_page=" + (current_page + 1) + "&total_pages=" + total_pages + "&boundaries=" + boundaries + "&around=" + around}>Next</a>);
    }

    return (
      <div className="pages">
        {listPages}
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
