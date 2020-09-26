import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    };

    renderDish(dish)
    {
        if(dish != null)
        {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments)
    {
        if(comments != null)
        {
            const ans = comments.map((comment) => {
                return(
                    <li key={comment.id}>
                        <br></br>
                        <div>
                            <p>{comment.comment}</p>
                        </div>
                        <div>
                            <p> -- {comment.author},  {
                            new Intl.DateTimeFormat(
                                'en-US',{year:'numeric',month:'short',day:'2-digit'})
                                .format(new Date(Date.parse(comment.date)))
                            }</p>
                        </div>
                    </li>
                )
            });
            return(
                <div>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                    {ans}
                    </ul>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    render()
    {
        if(this.props.selectedDish != null)
        {
            const commentOutput = this.renderComments(this.props.selectedDish.comments);
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {commentOutput}
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
}
export default DishDetail;