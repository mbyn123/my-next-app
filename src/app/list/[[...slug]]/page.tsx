import React from 'react'

/**
 * 
[[...slug]] → 可以传（0 个或多个）路径参数 slug:string数组
[...slug] → 只能传（1 个或多个）路径参数 slug:string数组
[slug] → （只能 1 个）路径参数 字符串 slug:string
 */

export default function page({ params }: { params: { slug: string[] } }) {
    console.log(params)
  return (
    <div>
      {JSON.stringify(params)}
    </div>
  )
}
