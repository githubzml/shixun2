import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  constructor(){
    super()
  }
  
  componentDidMount(){
    this.props.fetchData();
  }

  render(){
    let {goods_list} = this.props;
    if (!goods_list || !goods_list.length){
      return null;
    }
    return <div className={styles.list}>{
      goods_list.map((item, index)=>{
        return <li key={index}>
          <img src={item.thumb_url}/>
          <p>{item.short_name}</p>

        </li> 
      })
    }</div>  
  }
}

// 类型检查
IndexPage.propTypes = {

};

// 把仓库中的state数据中需要的部分映射成prop传递到组件中
const mapStateToProps = (state)=>{
  console.log('state...', state);
  return {
    goods_list: state.index.goods_list
  }
}

// 注入dispatch方法，把dispatch操作封装在函数中，传递函数到组件中
const mapDispatchToProps = (dispatch)=>{
  return {
    fetchData: ()=>{
      dispatch({
        type: 'index/fetch',
        payload: 199
      });
      // dispatch({
      //   type: 'index/save',
      //   payload: {a:10000}
      // });
    }
  }
}

// 把mapStateToProps的返回值stateProps，
// 把mapDispatchToProps的返回值dispatchProps和组件调用传入的props合并
const mergeProps = (stateProps, dispatchProps, ownProps)=>{
  return {...stateProps, ...dispatchProps, ...ownProps}
}

// 响应机制，是否需要数据深拷贝再响应
const options = {
  pure: true
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(IndexPage);
