Promise.resolve(Error("1"))
	.then(function(result){
			console.log("2")
		}
	).catch(function(result){
			console.log("3")
	        }
	).then((res)=>{console.log("4")}

	).catch(function(result){
			console.log("5")
	        }
	).then((res)=>{console.log("6")}

	).catch(function(result){
			console.log("7")
	})

