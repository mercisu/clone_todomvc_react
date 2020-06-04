var app = app || {};

(function () {
    'use strict';

    app.TodoFooter = React.createClass({
        render: function () {
            var activeTodoWorld = app.Utils.pluralize(this.props.count, 'item');
            var clearButton = null;

            if(this.props.completedCount > 0) {
                clearButton = (
                    <button
                    className="clear-completed"
                    onClick={this.props.onClearCompleted}
                    >
                        ClearCompleted
                    </button>
                )
            }

            var nowShowing = this.props.nowShowing;
            return (
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{this.props.count}</strong>
                        {activeTodoWorld} left
                    </span>
                    <ul className="filters">
                        <li>
                            <a href="#/"
                               className={classNames({selected:nowShowing === app.ALL_TODOS})}
                            >All</a>
                        </li>
                        {' '}
                        <li>
                            <a href="#/active"
                               className={classNames({selected:nowShowing === app.ACTIVE_TODOS})}
                            >Active</a>
                        </li>
                        {' '}
                        <li>
                            <a href="#/completed"
                               className={classNames({selected:nowShowing === app.COMPLETED_TODOS})}
                            >
                                Completed
                            </a>
                        </li>
                        {clearButton}
                    </ul>
                </footer>
            )
        }
    })
})();
