import { StarIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { Rating } from "@material-ui/lab";
import { useState, useEffect } from "react";
import SeeMore from "../SeeMore";
import { PlusIcon } from "@heroicons/react/20/solid";
import { MinusIcon } from "@heroicons/react/20/solid";
import animations from "./animations.module.css";
import SubmitReview from "../Reviews/SubmitReview";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ReviewsNew() {
  const [reviews, setReviews] = useState([]);
  const [reviewsNum, setReviewsNum] = useState(3);
  const [writeReview, setWriteReview] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(
          "https://secret-cove-64633.herokuapp.com/api/auth/get-reviews",
          config
        );
        setReviews(data.reviews);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const reviewsAverage = () => {
    let total = 0;
    let i = 0;
    reviews.forEach((review, index) => {
      i++;
      total += review.rating;
    });
    return [(total / i).toFixed(2)];
  };

  const reviewsCount = () => {
    let reviewsArr = {};
    reviews.forEach((review, index) => {
      let currentScore = reviewsArr[review.rating];
      if (!currentScore) {
        reviewsArr[review.rating] = 1;
      } else {
        reviewsArr[review.rating] += 1;
      }
    });
    let count = [];
    for (const score in reviewsArr) {
      count.push({ rating: Number(score), count: reviewsArr[score] });
    }
    count.sort((a, b) => (a.rating > b.rating ? -1 : 1))
    return count;
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviewsAverage() > rating
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviewsAverage()} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews.length} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviewsCount().map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900 mr-2">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? "text-yellow-400" : "text-gray-300",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{
                              width: `calc(${count.count} / ${reviews.length} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.length) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used our services, please share your thoughts with other
              customers
            </p>
            {writeReview ? (
              <SubmitReview className={animations["slideDown"]} />
            ) : (
              <p
                onClick={() => setWriteReview(true)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Write a review
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.slice(0, reviewsNum).map((review, index) => (
                <div
                  key={review.id}
                  className={classNames("py-12", animations["slideDown"])}
                  style={{ animationDuration: `${index / 10 + 1}` }}
                >
                  <div className="flex items-center">
                    <img
                      src={review.userImg}
                      alt={`${review._id}.`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.name}
                      </h4>
                      <div className="mt-1 flex items-center">
                        <Rating
                          name="hover-feedback"
                          value={review.rating}
                          precision={0.5}
                          readOnly={true}
                        />
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.review }}
                  />
                </div>
              ))}
            </div>
          </div>
          {reviewsNum < reviews.length ? (
            <SeeMore
              Icon={PlusIcon}
              text={"More"}
              clickFunc={() => {
                setReviewsNum(reviewsNum + 3);
              }}
            />
          ) : (
            <SeeMore
              Icon={MinusIcon}
              text={"Less"}
              clickFunc={() => {
                setReviewsNum(3);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
