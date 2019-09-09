import React     from 'react';
import PropTypes from 'prop-types';
import NewItem   from './NewItem';

const ListNews = ({news}) => (
    <div className="row">
        {
            news.map((newItem) => (
                <NewItem
                    key={newItem.url}
                    newItem={newItem}
                />
            ))
        }
    </div>
)

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews
