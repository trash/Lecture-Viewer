from operator import itemgetter

lectureWords = {}

def main():
	
	try:
		index = open('lectureIndex.txt','r')
	except IOError:
		print 'Cannot open lectureIndex.txt'
	
	#copy index from file to dict
	for line in index:
		tempDict = {}
		if line[0] == '{':
			tempDict = eval(line)
			lectureWords[keyword] = tempDict
		else:
			keyword = line.rstrip()
	
	searchResult = []
	
	searchPhrase = raw_input("Enter search phrase: ")
	
	#only ONE search word
	if len(searchPhrase.split(' ')) == 1:			
		if searchPhrase.lower() in lectureWords:
			resultSlides = lectureWords[searchPhrase.lower()]
			sortedResult = sorted(resultSlides.items(), key=itemgetter(1), reverse=True)
			
			#view result
			print ' '
			print 'Results for "' + searchPhrase + '" :'
			for slide, count in sortedResult:
				searchResult.append(slide)
			print searchResult
		
		else:
			print 'No results for "' + searchPhrase + '" found.'
			print searchResult
	
	#more than one search words
	#for now, add counts to rank results
	else:
		allResults = {}
		searchWords = searchPhrase.split(' ')
		for word in searchWords:
			if word.lower() in lectureWords:
				resultForOneWord = lectureWords[word.lower()]
				for slide, count in resultForOneWord.items():
					if slide in allResults:
						allResults[slide] = allResults[slide] + count
					else:
						allResults[slide] = count
				sortedResult = sorted(allResults.items(), key=itemgetter(1), reverse=True)
		
		#view result
		print ' '
		print 'Results for "' + searchPhrase + '" :'
		for slide, count in sortedResult:
			searchResult.append(slide)
		print searchResult

	
if __name__ == '__main__': main()