import { currencyFormatter } from "../../actions/stripe";
import { diffDays } from "../../actions/hotel";
import { useHistory, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

const SmallCard = ({
  h,
  handleHotelDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4"  >
            {h.image && h.image.contentType ? (
              <img
                src={`/api/hotels/image/${h._id}`}
                alt="default hotel image"
                className="card-image img img-fluid padd"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
                alt="default hotel image"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                {h.title}{" "}
                <div className="float-right text-primary">
                  ${h.price} <i>per night</i>
                </div>{" "}
              </h3>
            
              <p className="alert alert-info">{h.location}</p>
              <p className="card-text">{`${h.content.substring(0, 200)}...`}</p>

              <div className="d-flex justify-content-between h4">
                {showViewMoreButton && (
                  <button
                    onClick={() => history.push(`/hotel/${h._id}`)}
                    className="btn btn-primary"
                  >
                    Show more
                  </button>
                )}
                {owner && (
                  <>
                    <Link to={`/hotel/edit/${h._id}`}>
                      <EditOutlined className="text-warning" />
                    </Link>
                    <DeleteOutlined
                      onClick={() => handleHotelDelete(h._id)}
                      className="text-danger"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
