import requests 
from bs4 import BeautifulSoup
from selenium import webdriver
from bs4 import BeautifulSoup
import getpass
import requests
from selenium.webdriver.common.keys import Keys
import pprint

data_url = "http://anglehack-env.iva9jcc8nw.ap-south-1.elasticbeanstalk.com/all"

def get_data_parse(data_url):
	response  = requests.get(data_url)
	json_data = response.json()
	for x in range(len(json_data)):
		github = json_data[x]['github']
		linkedin = json_data[x]['linkedin']
		score(github, linkedin)

def score(github_username,lang,linkedin_username):
    url_github ="https://github.com/" + github_username
    url_linkedin="https://linkedin.com" + linkedin_username 

    URL = url_github + "?utf8=?&tab=repositories&q=&type=source&language="
    r = requests.get(URL) 
    soup = BeautifulSoup(r.text)
    score=0
    for i in soup.findAll('a',attrs={'class':'UnderlineNav-item'}):
        if i!=None:
            if i.text!=None:
                if 'TAB_FOLLOWERS' in str(i): 
                    if i.find('span',attrs={'class':'Counter'})!=None:
                        score=score+int(i.find('span',attrs={'class':'Counter'}).text)
    table = soup.find('div', attrs = {'id':'user-repositories-list'}) 

    for i in table.findAll('div',attrs={'class':'col-9 d-inline-block'}):
        if i.find('span', attrs = {'itemprop':'programmingLanguage'})!=None:
            language=i.find('span', attrs = {'itemprop':'programmingLanguage'})
            #print(language.text)
            if language.text==lang:
                score=score+1
                #print(score)
                if i.find('a',attrs={'class':'muted-link mr-3'})!=None:
                    start=i.find('a',attrs={'class':'muted-link mr-3'})
                    #print(start.text)
                    score=score+int(start.text)*5


    URL = url_linkedin+"?tab=overview"
    r = requests.get(URL) 
    soup = BeautifulSoup(r.text)
    w=soup.find('div',attrs={'class':'js-yearly-contributions'})
    if w.find('h2',attrs={'class':'f4 text-normal mb-2'})!=None:
        contri=w.find('h2',attrs={'class':'f4 text-normal mb-2'})
        contri=(contri.text)
        contri=contri[6:]
        contri=contri.replace('  ','')
        contri=contri.split()
        #print(contri)
        contri=int(contri[0])
        score=score+int(contri/5)
    pic=soup.find('img',attrs={'class':'avatar width-full rounded-2'})
    if(pic['src']!=None):
        pic=pic['src']
    else:
        pic=0
    
    
    
    chrome_path = "/home/maqbool/.asdf/shims/chromedriver"
    driver = webdriver.Chrome(chrome_path)
    driver.get(url_linkedin)
    q=(driver.find_elements_by_class_name('date-range__duration-bullet'))
    titles = [x.text for x in q]
    for i in range(len(titles)):
        if 'yrs' in titles[i]:
            q=titles[i].split()
            score=score+int(q[0])*12
            score=score+q[2]
        else:
            q=titles[i].split()
            score=score+int(q[0])
    return score,pic

#score("https://github.com/kpulkit29","Python",'https://www.linkedin.com/in/pulkit-kashyap-974b6b124/')