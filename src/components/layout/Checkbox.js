import { firebase } from 'firebase';
import React, { Fragment } from 'react'


export const Checkbox = ({id}) => {
    const archivedTask =() => {
        firebase
            .firestroe()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            });
    };

    return (
        <Fragment>
            <div className="checkbox-holder" 
            data-testid="checkbox-action" 
            onClick={() => archivedTask()}
            >
                <span className="checkbox" />
            </div>
        </Fragment>
    );
};