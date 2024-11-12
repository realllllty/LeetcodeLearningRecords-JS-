select name from Customer
where not referee_id = 2 or referee_id is null;

-- 使用NOT IN
SELECT
    name
FROM
    customer C
WHERE
    C.id NOT IN (
        SELECT
            C1.id
        FROM
            cumstomer C1
        WHERE
            C1.referee_id = 2
    )

-- 使用EXISTS
select C.name 
    from customer C
    -- not exists条件: 检查子查询是否会返回记录(否)
    where not exists(
        -- 子查询(进一步限制或者是过滤数据)
        select C1.name
        from customer C1
        where C1.referee_id = 2
        and C1.id = C.id
    )

-- not in 和 not exists的区别
-- not in需要检查组子查询返回的所有值然而not exists有一条匹配记录就会停止搜索

-- 使用OR
select C.name 
from customer C
-- 推荐人id不等于2或者推荐人id为空
where C.referee_id <> 2 or C.referee_id is null;