// https://leetcode.com/problems/search-insert-position/

export function searchInsert(nums: number[], target: number): number {
    function searchInsertInner(nums$: number[], target$: number, start$: number, end$: number) {
        console.log(start$, end$);
        const diff = end$ - start$;
        if (diff === 0) {
            if (target$ <= nums$[start$]) return start$;
            return start$ + 1;
        } else if (diff === 1) {
            if (target$ <= nums$[start$]) return start$;
            if (target$ <= nums$[start$ + 1]) return start$ + 1;
            return start$ + 2;
        } else {
            const newIndex = Math.floor((end$ - start$) / 2 + start$);
            if (nums$[newIndex] === target$) {
                return newIndex;
            } else if (nums$[newIndex] < target$) {
                return searchInsertInner(nums$, target$, newIndex + 1, end$);
            } else {
                return searchInsertInner(nums$, target$, start$, newIndex - 1);
            }
        }
    }
    return searchInsertInner(nums, target, 0, nums.length - 1);
}
