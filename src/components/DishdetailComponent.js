import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


function RenderDish({dish})
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

function RenderComments({comments})
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

function DishDetail(props)
{
    if(props.selectedDish != null)
    {
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.selectedDish.comments} />
                </div>
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

export default DishDetail;