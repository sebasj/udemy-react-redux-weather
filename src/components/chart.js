import React  from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
    return (
        <div>
            <td>
                <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color="red" />
                </Sparklines>
            </td>

        </div>
    )
}
