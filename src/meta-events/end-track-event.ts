import {Constants} from '../constants';
import {Utils} from '../utils';

/**
 * Object representation of a end track meta event.
 * @param {object} fields {delta: integer}
 * @return {EndTrackEvent}
 */
class EndTrackEvent implements MetaEvent, AbstractEvent {
	data: number[];
	delta: number;
	type: [0x2F, 0x00];
	name: string;

	constructor(fields?: { delta: number; }) {
		this.delta = fields?.delta || 0x00;
		this.name = 'EndTrackEvent';
		this.type = [0x2F, 0x00];

		// Start with zero time delta
		this.data = Utils.numberToVariableLength(this.delta).concat(
			Constants.META_EVENT_ID,
			this.type
		);
	}
}

export {EndTrackEvent};
