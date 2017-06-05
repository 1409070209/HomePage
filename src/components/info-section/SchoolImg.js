import React,{ Component } from 'react'
import './SchoolImg.css'

class SchoolImg extends Component{
	render() {
		return (
			<div className="img-school">
				<button id="img-school-left">&lt;</button>
				<ul className="imgul">
					<li><img src={img} alt="中国石油大学"/></li>
				</ul>
				<button id="img-school-right">&gt;</button>
				<ul className="port">
					<li>
					<i>&bull;</i>
					</li>
				</ul>
				
				
			</div>
		);
	}
}
export default SchoolImg;