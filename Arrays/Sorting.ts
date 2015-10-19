interface ISortableItem {
    SortKey(): any;
    IsLessThan(testValue: any): boolean;
    IsGreaterThan(testValue: any): boolean;
}

abstract class AbstractSortableItem<T> implements ISortableItem {
    protected _sortKey: T;

    constructor(sortKey: T) {
        this._sortKey = sortKey;
    }
    
    SortKey(): T {
        return this._sortKey;
    }

    public abstract IsLessThan(testValue: T): boolean;

    public IsGreaterThan(testValue: T): boolean {
        return ! this.IsLessThan(testValue);
    }

}

abstract class ArrayUtil {

    public static GetSortedArray<T extends ISortableItem>(theArray: Array<T>): Array<T> {
        let vals = theArray.slice(0);
        vals.sort((a, b): any => {
            if (a.IsLessThan(b.SortKey())) return -1;
            if (a.IsGreaterThan(b.SortKey())) return 1;
            return 0;
        });
        return vals;
    } 
}

class SortableStringItem extends AbstractSortableItem<string> {

    constructor(key: string) {
        super(key);
    }

    public IsLessThan(compareTo: string) {
        return compareTo < this._sortKey;
    }

}

class CalendarEvent {

    public get EventDate() { return this._eventDate; }
    public get EventTitle() { return this._eventTitle; }

    constructor(private  _eventDate: Date, private _eventTitle: string) {

    }
}

class SortableCalendarEvent extends AbstractSortableItem<CalendarEvent> {

    constructor(key: CalendarEvent) {
        super(key);
    }

    public IsLessThan(compareTo: CalendarEvent): boolean {
        if (compareTo.EventDate < this._sortKey.EventDate) return false;
        if (compareTo.EventDate > this._sortKey.EventDate) return true;
        if (compareTo.EventTitle < this._sortKey.EventTitle) return false;
        if (compareTo.EventTitle > this._sortKey.EventTitle) return true;

        return false;
    }
}


var myUnsortedStringArray: SortableStringItem[] = [];
var mySortedArray : SortableStringItem[] = [];

myUnsortedStringArray.push(new SortableStringItem("apples"));
myUnsortedStringArray.push(new SortableStringItem("bananas"));
myUnsortedStringArray.push(new SortableStringItem("oranges"));
myUnsortedStringArray.push(new SortableStringItem("pears"));
myUnsortedStringArray.push(new SortableStringItem("pomegranites (as if they really exist)"));
myUnsortedStringArray.push(new SortableStringItem("kiwi fruit"));
myUnsortedStringArray.push(new SortableStringItem("broccoli"));
myUnsortedStringArray.push(new SortableStringItem("peas"));
myUnsortedStringArray.push(new SortableStringItem("watermelon"));

mySortedArray = ArrayUtil.GetSortedArray(myUnsortedStringArray);

console.log("Unsorted Array:", myUnsortedStringArray);

console.log("Sorted Array:", mySortedArray);

var myUnsortedEvents: SortableCalendarEvent[] = [];

myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 20, 2015 11:30:00"), "Event ABC")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 20, 2015 11:30:00"), "Event XYZ")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 20, 2015 11:30:00"), "Event DEF")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 20, 2015 11:30:00"), "Event TUV")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 5, 2015 06:30:00"), "Early")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 9, 2015 14:30:00"), "Afternoon event")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 9, 2015 11:30:00"), "Morning event")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 28, 2015 09:00:00"), "One event today")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("December 25, 2015 00:00:00"), "Xmass")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("November 23, 2015 16:30:00"), "Nap Time!")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("November 23, 2015 12:00:00"), "Thanksgiving")));
myUnsortedEvents.push(new SortableCalendarEvent(new CalendarEvent(new Date("October 18, 1969 02:18:00"), "A great day in history")));

console.log("Unsorted events:", myUnsortedEvents);
console.log("Sorted events:", ArrayUtil.GetSortedArray(myUnsortedEvents));


