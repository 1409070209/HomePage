import React,{ Component } from 'react'
import './InfoSection.css'
import './SchoolNew.css'
import './SchoolUrl.css'
import UPCimage from '../../assets/img/UPC.jpg'
// import img from '../../assets/img/1.jpg'

class ListHeader extends Component{
	render() {
		return (
			<div className="list-header">
				<li className="list-header-li">
					<a href="http://www.upc.edu.cn"><p>账号广场</p></a>
				</li>
				<li className="list-header-li">
					<a href="http://www.upc.edu.cn"><p>账号广场</p></a>
				</li>
				<li className="list-header-li">
					<a href="http://www.upc.edu.cn"><p>账号平台</p></a>
				</li>
				<li className="list-header-li">
					<a href="http://www.upc.edu.cn"><p>账号平台</p></a>
				</li>
				<li className="list-header-li">
					<a href="http://www.upc.edu.cn"><p>账号平台</p></a>
				</li>
				<li className="list-header-li">
					<a href="http://www.upc.edu.cn"><p>账号平台</p></a>
				</li>
			</div>
		);
	}
}
class ListVertical extends Component{
	render() {
		return (
			<div className="list-vertical">
				<li className="list-vertical-li">
					<a href="http://www.upc.edu.cn">查看简介</a>
				</li>
				<li className="list-vertical-li">
					<a href="http://www.upc.edu.cn">机构群</a>
				</li>
				<li className="list-vertical-li">
					<a href="http://www.upc.edu.cn">本校成员</a>
				</li>
				<li className="list-vertical-li">
					<a href="http://www.upc.edu.cn">加为好友</a>
				</li>
			</div>
		);
	}
}
/*
    margin: -36px 355px;
    失去正确位置的”搜索“button,调整margin可以回到正确的位置
*/
class SchoolNew extends Component{
	render() {
		return (
			<div className="SchoolNew">
				<div className="SchoolNew-inner">
					<h3>通知公告</h3>
					<a href="http://www.upc.edu.cn">
						{this.props.news[0]}
					</a><br/>
					<a href="http://www.upc.edu.cn">
						{this.props.news[1]}
					</a>
				</div>
			</div>
		);
	}
}
class SchoolUrl extends Component{
	render() {
		return (
			<div className="SchoolUrl">
				<li>
					<h3>名师推荐</h3>
				</li>
				<li>
					<a href="http://http://www.upc.edu.cn/">
						<img src={UPCimage} alt="中国石油大学"/>
					</a>
					<h3>学院入口</h3>
				</li>
			</div>
		);
	}
}
class ListFooter extends Component{
	render() {
		var news = ["1.动漫配音大赛开始了，参加礼品多多" , "2.动漫配音大赛开始了，参加礼品多多"]
		return (
			<div className="ListFooter">
				<ul>
					<li id="ListFooter-first-li"><ListVertical /></li>
					<li id="ListFooter-second-li"><SchoolNew news={news}/></li>
					<li id="ListFooter-thrid-li"><SchoolNew news={news}/></li>
					<li id="ListFooter-fourth-li"><SchoolUrl /></li>
				</ul>
			</div>
		);
	}
}
export default class InfoSection extends Component{
	constructor(proto){
		super();
	}
    render(){
        return (
			<div className="InfoSection">
				<ListHeader />
				<ListFooter />	
			</div>
        )
    }
}