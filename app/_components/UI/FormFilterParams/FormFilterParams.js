'use client'
import styles from './FormFilterParams.module.scss'

export default function FormFilterParams({handleSubmit, queryParams, setQueryParams}) { 
	return (
		<form id="qf" className={styles.form} 
      onSubmit={(e) => { console.log('form')
        e.preventDefault()
        handleSubmit(e.target)
      }} 
 
    >
			<label className={styles.search}>
				Поиск по постам:
				<input name="query" value={queryParams.query} onChange={e => setQueryParams(prev => ({...prev, query: e.target.value}))} placeholder="Введите текст" />
			</label>
			<div className={styles.filterbar}>
				Фильтр по:
				{[
					{
						title: 'Нет',
						filter: 'none',
					},
					{
						title: 'ID больше 25',
						filter: 'id25',
					},
					{
						title: 'ID больше 65',
						filter: 'id65',
					},
				].map((filter, i) => (
					<label key={i}>
						<input
							value={filter.filter}
							name={'filter'}
							type="radio"
							key={i}
              onChange={(e) => setQueryParams(prev => ({...prev, filter: e.target.value}))}
							checked={queryParams.filter === filter.filter && true}
						/>
						{filter.title}
					</label>
				))}
			</div>
			<div className={styles.sortbar}>
				Сортировать по:
				{[
					{
						title: 'Нет',
						sort: 'none',
					},
					{
						title: 'ID',
						sort: 'id',
					},
					{
						title: 'Title',
						sort: 'title',
					},
				].map((sort, i) => (
					<label key={i}>
						<input
							value={sort.sort}
							name={'sort'}
							type="radio"
							key={i}
              onChange={(e) => setQueryParams(prev => ({...prev, sort: e.target.value}))}
							checked={queryParams.sort === sort.sort && true}
						/>
						{sort.title}
					</label>
				))}
			</div>
      <div className={styles.buttons}>
        <button type='submit'>Click</button>
        <button type="button" onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          handleSubmit(null, null, true)
        }}>reset</button>
      </div>
		</form>
	)
}
